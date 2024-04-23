import QueryProvider from '@/components/providers/query-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { PropsWithChildren } from 'react'
import { Provider as JotaiProvider } from 'jotai'

function Providers({ children }: PropsWithChildren) {
    return (
        <JotaiProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <QueryProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </QueryProvider>
                <Toaster />
            </ThemeProvider>
        </JotaiProvider>
    )
}

export default Providers
