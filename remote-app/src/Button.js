import {useQuery} from '@tanstack/react-query';
import React, {useEffect} from 'react';

const style = {
    background: '#4b4be8',
    color: '#fff',
    padding: 12,
}

const useMyQuery = () => {
    return useQuery({
        queryKey: ['remoteQuery'],
        queryFn: async () => {
            return 'Remote Button'
        }
    })
}

const Button = props => {
    useEffect(() => {
        console.log('hooks work');
    }, []);

    const query = useMyQuery();

    console.log('query', query);

    return <button style={style}>{query.data}</button>;
};

export default Button;
