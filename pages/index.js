import Nav from "../src/components/Nav";
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';



library.add(fab);

const Index = () => {
  return (
      <div>
          <Nav/>
      </div>
  );
};

export default Index;