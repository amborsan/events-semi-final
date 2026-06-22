import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/$eventId/edit')({
  component: EditEvent,
})

function EditEvent() {
  return <div>Hello "/events/$eventId/edit"!</div>
}
