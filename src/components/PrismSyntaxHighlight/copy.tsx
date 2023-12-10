import  { useState } from 'react'
import { Button, App } from 'antd'
import { useDebounceFn } from 'ahooks'
import copyToClipboard from 'copy-to-clipboard';

function Copy({ content }: { content: string }) {
  const { message } = App.useApp()
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
    message.open({
      type: 'success',
      content: 'Copied 🎉',
      duration: 2,
    })
    run()
  }
  return (
    <Button size="small" type="dashed" onClick={copyClick}>
        {copied ? 'Copied!' : 'Copy'}
      </Button>
  )
}

export default Copy
