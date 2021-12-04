import React from 'react';
import Input from './Input';

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size='small' variant='aqua-input' placeholder='Small size' />
export const Medium = () => <Input size='medium' variant='mandarine-input' placeholder='Medium size' />
export const Large = () => <Input size='large' variant='barbie-input' placeholder='Large size' />


