"use client"

import { Button } from "@/components/ui/button"
import {
    Facebook,
    Linkedin,
    Twitter,
    Link as LinkIcon,
    MessageCircle
} from "lucide-react"
import { toast } from "sonner"
import { useEffect, useState } from "react"

export default function ShareButtons({
    url,
    title
}: {
    url?: string
    title?: string
}) {
    const [currentUrl, setCurrentUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(url || window.location.href)
        }
    }, [url])

    const shareLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
            color: "hover:text-blue-600"
        },
        {
            name: "Twitter",
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title || "Check this out!")}`,
            color: "hover:text-sky-500"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title || "")}`,
            color: "hover:text-blue-700"
        },
        {
            name: "WhatsApp",
            icon: MessageCircle,
            href: `https://wa.me/?text=${encodeURIComponent((title ? title + " " : "") + currentUrl)}`,
            color: "hover:text-green-500"
        }
    ]

    const copyToClipboard = async () => {
        if (!currentUrl) return

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(currentUrl)
                toast.success("Link copied to clipboard!")
            } else {
                // Fallback for older browsers or non-secure contexts
                const textArea = document.createElement("textarea")
                textArea.value = currentUrl
                document.body.appendChild(textArea)
                textArea.select()
                try {
                    document.execCommand('copy')
                    toast.success("Link copied to clipboard!")
                } catch (err) {
                    toast.error("Failed to copy link")
                }
                document.body.removeChild(textArea)
            }
        } catch (err) {
            console.error("Clipboard error:", err)
            toast.error("Failed to copy link")
        }
    }

    return (
        <div className="flex items-center gap-2">

            {shareLinks.map((link) => (
                <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    className={`rounded-full ${link.color} transition-colors`}
                    onClick={() => window.open(link.href, '_blank', 'width=600,height=400')}
                    title={`Share on ${link.name}`}
                >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                </Button>
            ))}
            <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:text-gray-700 transition-colors"
                onClick={copyToClipboard}
                title="Copy Link"
            >
                <LinkIcon className="h-5 w-5" />
                <span className="sr-only">Copy Link</span>
            </Button>
        </div>
    )
}
