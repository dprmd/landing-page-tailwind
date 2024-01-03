import Button from "../Reusable/Button"

export default function SelfDesc() {
  return (
    <>
      <p className="desc">
        Hallo senang kamu melihat halaman ini, belajar membuat web itu lumayan
        menantang, saya harap kamu suka dengan tema yang saya gunakan.
      </p>
      <Button href="#about" text="Tentang Saya" color="primary" lightColor="primaryMuda"/>
    </>
  );
}
