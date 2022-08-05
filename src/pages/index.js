import * as React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <h1 className="">Congratulations</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h2>Test</h2>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
