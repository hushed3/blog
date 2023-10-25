import React, { useState } from 'react'
import { Button, message } from 'antd'
import { useDebounceFn } from 'ahooks'
import { copyToClipboard } from '@/utils/copy-to-clipboard'

export const Copy = ({ content }: { content: string }) => {
  const [messageApi, contextHolder] = message.useMessage()
  const [copied, setCopied] = useState<boolean>(false)

  const { run } = useDebounceFn(
    () => {
      setCopied(false)
    },
    {
      wait: 2000,
    }
  )
  const copyClick = () => {
    copyToClipboard(content)
    setCopied(true)
    messageApi.open({
      type: 'success',
      content: 'Copied 🎉',
      duration: 2,
    })
    run()
  }
  return (
    <>
      {contextHolder}
      <Button size="small" type="dashed" onClick={copyClick}>
        {copied ? 'Copied!' : 'Copy'}
      </Button>
    </>
  )
}
