import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from 'src/modules/home/HomeLayout';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Head>
        <title>CareerWizard: Professional Resume Builder</title>
        <meta
          name="description"
          content="Create professional resumes with our easy-to-use resume builder. Choose from multiple templates and get hired faster."
        />
        <meta
          name="keywords"
          content="resume builder, CV maker, professional resume, job application, career tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="CareerWizard: Professional Resume Builder" />
        <meta
          property="og:description"
          content="Create professional resumes with our easy-to-use resume builder. Choose from multiple templates and get hired faster."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <main className="container mx-auto py-8">
        <HomeLayout />
      </main>
    </div>
  );
};

export default HomePage;
