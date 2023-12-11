import Button from '../components/Button';
import * as React from 'react'
import Link from "next/link";


export default function Home() {

    const [Component, setComponent] = React.useState(null)
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            setComponent(React.lazy(() => import('remote/Button')))
        }
    }, [])

    return (
        <div style={{padding: '2%'}}>
            <h1>Next JS and React</h1>
            <h2>Host - Button</h2>
            <Button/>
            <h2>Client - Button</h2>
            {Component && <Component/>}

            <Link href={"/dynamic-remote"}>Error: Dynamic Remotes</Link>
        </div>
    );
}
