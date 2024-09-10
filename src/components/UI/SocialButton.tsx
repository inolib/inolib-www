"use client";

import type { JSX } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { cn } from "~/components/helpers/cn";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/UI/Tooltip";

type SocialButtonProps = {
  className?: string;
  buttonClassName?: string;
};

export const SocialButton = ({
  className = "",
  buttonClassName = "",
}: JSX.IntrinsicElements["button"] & SocialButtonProps) => {
  return (
    <TooltipProvider>
      <div className={cn("social-share-buttons flex justify-center gap-2", className)}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.linkedin.com/company/inolib/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
            >
              <FaLinkedin aria-label="Nous contacter sur LinkedIn" className="text-[#0077b5]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Nous contacter sur LinkedIn</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.facebook.com/people/Inolib/100075572787282/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
            >
              <FaFacebook aria-label="Nous contacter sur Facebook" className="text-[#3b5998]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Nous contacter sur Facebook</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.youtube.com/channel/UC9yPUJFvQkKsxGeAJ3CJOTg"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
            >
              <FaXTwitter aria-label="Partager via Twitter" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Partager via Twitter</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`https://www.instagram.com/inolib/`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
            >
              <FaInstagram aria-label="Partager via Instagram" className="text-[#bc2a8d]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Partager via Instagram</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
            >
              <FaWhatsapp aria-label="Partager via WhatsApp" className="text-[#075e54]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Partager via WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
