import React from 'react'
import { FC, ForwardedRef, forwardRef } from 'react'

import { useStyles } from './style'

interface SelectItemProps {
  value: any
  label: any
  prefixCls: string
  isSelected?: boolean
  isActive?: boolean
  ref?: ForwardedRef<HTMLButtonElement>
  disabled?: boolean
}

// eslint-disable-next-line react/display-name
const SelectItem: FC<SelectItemProps> = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ value, label, prefixCls, isSelected, isActive, disabled, ...props }, ref) => {
    const { styles, cx } = useStyles(prefixCls)

    return (
      <button
        type={'button'}
        key={value}
        disabled={disabled}
        aria-selected={isSelected}
        role="option"
        tabIndex={-1}
        className={cx(styles.item, {
          [styles.active]: isActive,
          [styles.selected]: isSelected,
        })}
        ref={ref}
        {...props}
      >
        {label}
      </button>
    )
  }
)

export default SelectItem
