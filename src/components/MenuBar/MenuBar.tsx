import { FunctionComponent, ReactNode, createContext, useRef, useState } from 'react'
import { useStyles } from './style'
import { useDebounceEffect } from 'ahooks'
import { removeSiblingNodesWithoutChildren } from '@/utils/func'

interface MenuBarProps {
  children?: ReactNode
}
interface MenuBarContextState {
  linkRef?: HTMLDivElement | null
  setLinkRef?: (ref: HTMLDivElement | null) => void
  tagRef?: HTMLDivElement | null
  setTagRef?: (ref: HTMLDivElement | null) => void
  textRef?: HTMLDivElement | null
  setTextRef?: (ref: HTMLDivElement | null) => void
}

export const MenuBarContext = createContext<MenuBarContextState>({
  linkRef: null,
  setLinkRef: () => {},
  tagRef: null,
  setTagRef: () => {},
  textRef: null,
  setTextRef: () => {},
})

const MenuBar: FunctionComponent<MenuBarProps> = (props) => {
  const { styles } = useStyles()
  const [linkRef, setLinkRef] = useState<HTMLDivElement | null>(null)
  const [tagRef, setTagRef] = useState<HTMLDivElement | null>(null)
  const [textRef, setTextRef] = useState<HTMLDivElement | null>(null)
  const menuBarRef = useRef<HTMLDivElement>(null)

  useDebounceEffect(
    () => {
      removeSiblingNodesWithoutChildren(linkRef)
      removeSiblingNodesWithoutChildren(tagRef)
      removeSiblingNodesWithoutChildren(textRef)
    },
    [],
    {
      wait: 100,
    }
  )

  return (
    <>
      <MenuBarContext.Provider
        value={{
          linkRef,
          setLinkRef,
          tagRef,
          setTagRef,
          textRef,
          setTextRef,
        }}
      >
        <div ref={menuBarRef} className={styles.menuBar}>
          {props.children}
        </div>
      </MenuBarContext.Provider>
    </>
  )
}

export default MenuBar
