import { useBearStore } from '@/stores/bearStore'

export default function Product() {
  const { bears } = useBearStore()
  return <h1>{bears}</h1>
}
