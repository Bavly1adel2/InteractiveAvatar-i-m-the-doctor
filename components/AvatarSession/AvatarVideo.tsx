import React, { forwardRef } from "react";
import { ConnectionQuality } from "@heygen/streaming-avatar";

import { useConnectionQuality } from "../logic/useConnectionQuality";
import { useStreamingAvatarSession } from "../logic/useStreamingAvatarSession";
import { StreamingAvatarSessionState } from "../logic";
import { CloseIcon } from "../Icons";
import { Button } from "../Button";

export const AvatarVideo = forwardRef<HTMLVideoElement>(({}, ref) => {
  const { sessionState, stopAvatar } = useStreamingAvatarSession();
  const { connectionQuality } = useConnectionQuality();

  const isLoaded = sessionState === StreamingAvatarSessionState.CONNECTED;

  return (
    <>
      {/* Connection Quality Indicator - Responsive positioning and text */}
      {connectionQuality !== ConnectionQuality.UNKNOWN && (
        <div className="absolute top-2 left-2 bg-black/80 text-white rounded-lg px-2 py-1 text-xs z-10">
          <span className="hidden sm:inline">Connection Quality: </span>
          <span className="sm:hidden">Q: </span>
          {connectionQuality}
        </div>
      )}
      
      {/* Close Button - Responsive positioning and sizing */}
      {isLoaded && (
        <Button
          className="absolute top-2 right-2 !p-1 sm:!p-1.5 bg-zinc-700/80 bg-opacity-80 z-10 text-xs sm:text-sm"
          onClick={stopAvatar}
        >
          <CloseIcon />
        </Button>
      )}
      
      {/* Video Element - Responsive sizing */}
      <video
        ref={ref}
        autoPlay
        playsInline
        className="video-container w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
      >
        <track kind="captions" />
      </video>
      
      {/* Loading State - Responsive text */}
      {!isLoaded && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0">
          <div className="text-zinc-400 text-sm sm:text-base">Loading...</div>
        </div>
      )}
    </>
  );
});
AvatarVideo.displayName = "AvatarVideo";
