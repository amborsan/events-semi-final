import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/new')({
  component: Events,
})

function Events() {
  return <div>Hello "/events/new"!</div>
}
