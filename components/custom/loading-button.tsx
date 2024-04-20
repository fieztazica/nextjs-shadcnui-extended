import { Loader2 } from 'lucide-react'
import React from 'react'
import { Button, ButtonProps } from '../ui/button'

export interface LoadingButtonProps extends ButtonProps {
    isLoading?: boolean
    loadingHolder?: React.ReactNode
}

function LoadingButton({
    isLoading = false,
    loadingHolder = (
        <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {'Please wait'}
        </>
    ),
    children,
    className,
    ...props
}: LoadingButtonProps) {
    return (
        <Button disabled={isLoading} {...props}>
            {isLoading ? loadingHolder : children}
        </Button>
    )
}

export { LoadingButton }
