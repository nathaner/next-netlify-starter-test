export default function Home(props) {
  return (
    <>
      {props.ssrWorking ? (
        <div>
          <img src="/check.png" height="80" />
          <h2> Deployment Successful of Nextjs Application with SSR on Firebase. </h2>
        </div>
      ) : (
        <h2>SSR not working</h2>
      )}
    </>
  );
}

export async function getServerSideProps() {
  return { props: { ssrWorking: true } };
}