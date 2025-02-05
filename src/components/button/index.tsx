import Icon from '../icon';
import './style.css';

interface Props {
    onClick: () => void;
    label: string;
    icon?: string;
    variant?: string;
    className?: string;
    size: 'sm' | 'lg';
}

const index = (props: Props) => {
    const { size, label, onClick, icon, variant, className } = props;
  return (
    <div onClick={onClick} className={`button button-${size} ${variant} ${className}`}>
        {label}
        {icon && icon !== '' &&  <Icon className={size === 'sm' ? 'h-4 w-4' : 'h-6 w-6'} icon={icon} />}
    </div>
  )
}

export default index

index.defaultProps = {
    variant: 'primary',
    icon: '',
    className: '',
}