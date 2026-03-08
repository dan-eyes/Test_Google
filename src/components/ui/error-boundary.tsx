import * as React from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  props: ErrorBoundaryProps;
  state: ErrorBoundaryState = { hasError: false }

  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.props = props;
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">Qualcosa è andato storto.</h1>
          <p className="text-zinc-600 mb-8 max-w-md">
            Si è verificato un errore imprevisto. Ricarica la pagina o torna alla home.
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/'}>
            Torna alla Home
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
