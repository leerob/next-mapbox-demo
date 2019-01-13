import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false
});

export default () => <DynamicComponentWithNoSSR />;
