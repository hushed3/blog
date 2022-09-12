import instance from './config'

/**
 * @description 获取图片列表
 * @date 07/09/2022
 */
export const getImages = () => instance.get('/sunset/getImages')
