import { encryp } from './encryp'

export const gatKeywords = (): string => {
  return encryp(`hushes${new Date().getTime()}`) as string
}
