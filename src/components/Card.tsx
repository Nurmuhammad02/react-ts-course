import React, {FC, JSXElementConstructor, ReactElement} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primary = 'primary'
}


interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children: ReactElement<any, string> | ReactElement<any, string>[];
    onClick: () => void;
}


const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 onClick,
                                 children,
}) => {
    return (
        <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid gray' :'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;