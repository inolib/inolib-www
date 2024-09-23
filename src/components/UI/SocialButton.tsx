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
              aria-label="LinkedIn" // Aria-label sur le lien
            >
              <FaLinkedin className="text-[#0077b5]" aria-hidden="true" />{" "}
              {/* Icône masquée pour les lecteurs d'écran */}
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
              aria-label="Nous contacter sur Facebook"
            >
              <FaFacebook className="text-[#3b5998]" aria-hidden="true" />{" "}
              {/* Icône masquée pour les lecteurs d'écran */}
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Facebook</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.youtube.com/channel/UC9yPUJFvQkKsxGeAJ3CJOTg"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
              aria-label=" x"
            >
              <FaXTwitter aria-hidden="true" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p> X </p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`https://www.instagram.com/inolib/`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("cursor-pointer border-none bg-transparent text-2xl hover:opacity-70", buttonClassName)}
              aria-label="Instagram"
            >
              <FaInstagram className="text-[#bc2a8d]" aria-hidden="true" />{" "}

            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p> Instagram</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
