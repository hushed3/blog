import React from 'react'
import { useStyles } from './style'

const Calendar: React.FC<IconProps> = (props) => {
  const { theme } = useStyles()
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
      <g id="empty-clipboard--work-plain-clipboard-task-list-company-office">
        <path
          id="Rectangle 659"
          fill={theme.colorPrimaryBorder}
          d="M1.6071428571428572 3.2142857142857144A1.9285714285714288 1.9285714285714288 0 0 1 3.535714285714286 1.2857142857142858h10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 1.9285714285714288 1.9285714285714288v12.857142857142858a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 1.9285714285714288h-10.928571428571429a1.9285714285714288 1.9285714285714288 0 0 1 -1.9285714285714288 -1.9285714285714288v-12.857142857142858Z"
          strokeWidth={1}
        />
        <path
          id="Union"
          fill={theme.colorPrimaryHover}
          d="M5.7857142857142865 1.2857142857142858a1.2857142857142858 1.2857142857142858 0 0 1 1.2857142857142858 -1.2857142857142858h3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 1 1.2857142857142858 1.2857142857142858v0.6428571428571429a1.2857142857142858 1.2857142857142858 0 0 1 -1.2857142857142858 1.2857142857142858h-3.8571428571428577a1.2857142857142858 1.2857142857142858 0 0 1 -1.2857142857142858 -1.2857142857142858V1.2857142857142858Z"
          strokeWidth={1}
        />
      </g>
    </svg>
  )
}

export default Calendar
