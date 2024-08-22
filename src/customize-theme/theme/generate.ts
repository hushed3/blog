export const transformerColors = (key: string, colors: string[]) => {
  const _key = key.charAt(0).toUpperCase() + key.slice(1)

  const _colors = {
    [`color${_key}Bg`]: colors[0],
    [`color${_key}BgHover`]: colors[1],
    [`color${_key}Border`]: colors[2],
    [`color${_key}BorderHover`]: colors[3],
    [`color${_key}Hover`]: colors[4],
    [`color${_key}`]: colors[5],
    [`color${_key}Active`]: colors[6],
    [`color${_key}TextHover`]: colors[4],
    [`color${_key}Text`]: colors[5],
    [`color${_key}TextActive`]: colors[6],
  } as const

  return _colors
}
