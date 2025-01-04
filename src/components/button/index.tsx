import Icon from '../icon';
import './style.css';

interface Props {
    onClick: () => void;
    label: string;
    icon?: string;
    variant?: string;
    size: 'sm' | 'lg';
}

const index = (props: Props) => {
    const { size, label, onClick, icon, variant } = props;
  return (
    <div onClick={onClick} className={`button-${size} flex cursor-pointer flex-row items-center justify-center gap-2 ${variant}`}>
        {label}
        {icon && icon !== '' &&  <Icon className={size === 'sm' ? 'h-4 w-4' : 'h-6 w-6'} icon={icon} />}
    </div>
  )
}

export default index

index.defaultProps = {
    variant: 'primary',
    icon: '',
}