import { Suspense } from "react"
import { PlaylistSkeleton } from "./ui/PlaylistSkeleton"

export const Playlist = () => (
  <Suspense fallback={<PlaylistSkeleton />}>
    <div className="flex items-center justify-center m-10 app">
      <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/5EGxiMU2YkOIZ96Bm2eA6y?utm_source=generator&theme=0" width="75%" height="752" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </Suspense>
)
