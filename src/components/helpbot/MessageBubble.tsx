'use client';

import React from 'react';
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  sender: string;
  message: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ sender, message }) => {
  const isBot = sender === 'bot';
  
  return (
    <div className={cn(
      "flex w-full",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-2 shadow-sm",
        isBot 
          ? "bg-secondary text-secondary-foreground" 
          : "bg-primary text-primary-foreground"
      )}>
        <p className="text-sm whitespace-pre-wrap break-words">{message}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
