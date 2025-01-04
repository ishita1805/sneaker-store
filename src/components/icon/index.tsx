const index = ({icon, className, onClick }: { onClick?: () => void, icon: string, className?: string}) => {
    const parseIcon = (icon: string) => {
        try {
          return { __html: JSON.parse(icon)};
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e: unknown) {
          return {__html: icon};
        }
      };

  return (
    <div onClick={onClick} className={className} dangerouslySetInnerHTML={parseIcon(icon)}></div>
  )
}
export default index