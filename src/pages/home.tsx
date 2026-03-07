import { useState, useRef } from "react"
import { Link } from "@tanstack/react-router"
import { Button, Text, Heading, Input, clx } from "@medusajs/ui"
import { 
  ArrowUpMini, 
  ArrowUpTray, 
  Spinner, 
  XMark, 
  LightBulb 
} from "@medusajs/icons"
import { GoogleGenAI } from "@google/genai"

export function Home() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setVideoUrl(null); // Reset video if new image selected
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setPreviewUrl(null);
    setVideoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleGenerate = async () => {
    // Use default image if no file selected
    let base64Image = "";
    let mimeType = "image/jpeg";

    try {
      setIsGenerating(true);
      
      // Check API Key
      if ((window as any).aistudio && !(window as any).aistudio.hasSelectedApiKey()) {
          await (window as any).aistudio.openSelectKey();
      }

      // Use the API key from the environment
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      if (imageFile) {
        // Convert uploaded file to base64
        const base64Data = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(imageFile);
        });
        base64Image = base64Data.split(',')[1];
        mimeType = imageFile.type;
      } else {
        // Fetch default image
        const defaultImageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
        const response = await fetch(defaultImageUrl);
        const blob = await response.blob();
        const base64Data = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
        });
        base64Image = base64Data.split(',')[1];
        mimeType = blob.type;
      }

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || "Make the water flow",
        image: {
          imageBytes: base64Image,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }

      const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (videoUri) {
          const response = await fetch(videoUri, {
              headers: {
                  'x-goog-api-key': process.env.GEMINI_API_KEY!
              }
          });
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
      }

    } catch (error: any) {
      console.error("Error generating video:", error);
      
      // Handle Permission Denied (403) or Not Found (404) by prompting for key again
      if (error.message?.includes("403") || error.message?.includes("PERMISSION_DENIED") || error.message?.includes("404")) {
        alert("You need a paid API key to use Veo video generation. Please select a valid key from a paid Google Cloud project.");
        if ((window as any).aistudio) {
            await (window as any).aistudio.openSelectKey();
        }
      } else {
        alert("Failed to generate video. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in slide-in-from-bottom-2">
      {/* Hero Section */}
      <section id="hero-image" className="p-3 pt-[2px]">
        <div className="relative flex justify-center w-full rounded-2xl overflow-hidden py-8 bg-ui-bg-base transition-colors" style={{ minHeight: "calc(100vh - 76px - 24px)" }}>
          {/* Background Gradient & Image/Video */}
          <div className="absolute inset-0 w-full h-full">
             {/* Gradient matching the reference */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-ui-bg-base to-black dark:from-[#0055FF] dark:via-[#001133] dark:to-[#000205] z-0" />
             
             {/* Render Video if available */}
             {videoUrl ? (
                <video 
                  src={videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
             ) : (
               /* Render Preview Image if available, else default texture */
               <img 
                  src={previewUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"}
                  alt="Hero Background"
                  className={clx(
                    "absolute inset-0 w-full h-full object-cover z-0",
                    previewUrl ? "opacity-100" : "opacity-30 dark:opacity-40 mix-blend-overlay grayscale"
                  )}
               />
             )}
             
             {/* Slight dark overlay for text readability */}
             <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
          </div>

          <div className="relative z-20 flex flex-col items-center px-8 w-full max-w-[1024px] self-stretch">
            <div className="flex-1 w-px bg-white/20 dark:bg-white/25"></div>
            
            <div className="flex flex-col items-center gap-3 w-full text-center py-8">
              <div className="flex gap-1.5 items-center justify-center drop-shadow-sm">
                <Text size="base" weight="plus" className="text-white">Export</Text>
                <div className="relative size-4 flex items-center justify-center">
                  <LightBulb className="w-full h-full text-white/60" />
                </div>
                <Text size="base" weight="plus" className="text-white">it's simple.</Text>
              </div>
              
              <div className="font-serif font-light leading-[1.1] text-[32px] sm:text-[40px] md:text-[56px] text-white drop-shadow-md">
                <p className="mb-0">A new way</p>
                <p>to export.</p>
              </div>
              
              <Text size="xlarge" weight="plus" className="text-white max-w-lg mb-6 drop-shadow-sm">
                AI-Export Marketplace B2B
              </Text>
              
              <div className="w-full max-w-[616px]">
                <div id="prompt-intake" className="w-full">
                  <div className="w-full flex items-end gap-2">
                    <div className="flex-1 min-w-0 bg-ui-bg-base/95 backdrop-blur-sm rounded-[24px] pl-5 pr-3 py-2 shadow-elevation-card-rest transition-all border border-ui-border-base">
                      <div className="flex items-center gap-2">
                        {previewUrl && (
                          <div className="relative shrink-0">
                            <img src={previewUrl} alt="Preview" className="h-8 w-8 rounded-md object-cover border border-ui-border-base" />
                            <button onClick={clearImage} className="absolute -top-1 -right-1 bg-ui-bg-base text-ui-fg-base rounded-full p-0.5 hover:bg-ui-bg-base-hover border border-ui-border-base">
                              <XMark className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                        <input 
                          type="text"
                          placeholder={previewUrl ? "Describe how to animate this image..." : "Ask Bloom to build a webshop that sells specialty coffee.."}
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          className="text-[15px] text-left text-ui-fg-base bg-transparent border-none outline-none w-full min-h-[20px] max-h-[220px] overflow-y-auto placeholder:text-ui-fg-muted"
                        />
                        <button 
                          type="button" 
                          onClick={handleGenerate}
                          disabled={isGenerating}
                          className="size-8 rounded-full flex items-center justify-center transition-colors shrink-0 disabled:cursor-not-allowed disabled:opacity-50 self-end bg-ui-bg-subtle shadow-elevation-card-rest border border-ui-border-base hover:bg-ui-bg-subtle-hover"
                        >
                          {isGenerating ? <Spinner className="w-4 h-4 text-ui-fg-subtle animate-spin" /> : <ArrowUpMini className="w-4 h-4 text-ui-fg-subtle" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2 items-end shrink-0">
                      <button 
                        type="button" 
                        title="Upload image" 
                        onClick={() => fileInputRef.current?.click()}
                        className="size-12 rounded-full bg-ui-bg-base hover:bg-ui-bg-base-hover active:bg-ui-bg-subtle flex items-center justify-center transition-colors disabled:opacity-40 shadow-elevation-card-rest border border-ui-border-base"
                      >
                        <ArrowUpTray className="w-4 h-4 text-ui-fg-subtle" />
                      </button>
                    </div>
                  </div>
                  <input 
                    ref={fileInputRef}
                    accept="image/*" 
                    className="hidden" 
                    type="file" 
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-px bg-white/20 dark:bg-white/25"></div>
          </div>
        </div>
      </section>

    </div>
  )
}
