import { isSSR } from '@/utils/func'

/**
 * @description 查询last路径名
 * @date 23/10/2022
 * @export
 * @return {*}
 */
export const useLastPath = () => {
  if (isSSR) return ''

  const path = location.pathname.split('/')
  const pathLength = path.length

  return path[pathLength - 2]
}
