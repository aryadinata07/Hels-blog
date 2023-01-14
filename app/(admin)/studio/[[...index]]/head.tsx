// Re-export `NextStudioHead` as default if you're happy with the default behavior
export {NextStudioHead} from 'next-sanity/studio/head'

// To customize it, use it as a children component:
import {NextStudioHead} from 'next-sanity/studio/head'

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://i.pinimg.com/originals/1f/17/a5/1f17a5fda41ee18509c6cfa099144b2d.jpg"
      />
    </>
  )
}