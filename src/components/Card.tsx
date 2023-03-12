import React, {FC, JSXElementConstructor, ReactElement, useState} from 'react';

export enum CardVariant {
    outlined= 'outlined',
    primary = 'primary'
}


interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children: ReactElement<any, string> | ReactElement<any, string>[];
}


const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 children,
}) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height,
            border: variant === CardVariant.outlined ? '1px solid gray' :'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
        >
            {children}
        </div>
    );
};

export default Card;