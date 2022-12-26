import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle={"Home Page"}>
      <div className="content">
        <h1>perihal apa yang dilakuakn</h1>
        <p>what the dog doin</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quidem doloremque consequuntur voluptatibus inventore fugiat. Mollitia
          expedita placeat repellendus qui aut libero voluptate quam quae
          temporibus doloribus numquam veniam doloremque explicabo officia vero,
          modi obcaecati quis at beatae quos assumenda nam. Est iusto non rerum
          provident, laborum iure distinctio saepe quas!
        </p>
      </div>
      {/* <Image src={"/iamge1.webp"} alt={"gambar1"} width={700} height={400} /> */}
    </Layout>
  );
}
