import Image from "next/image";
import QRImage from "@/assets/image-qr-code.png";

const QRContainer = () => {
  return (
    <div className="flex flex-col items-center h-auto bg-white rounded-xl w-64 shadow-lg">
      <Image
        src={QRImage}
        width={230}
        height={300}
        alt="qr"
        className="rounded-xl mt-3"
      />
      <div className="p-5 flex flex-col gap-2 justify-centers items-center text-center mb-3">
        <h3 className="font-extrabold">
          Improve your front-end skills by building projects
        </h3>
        <p className="text-xs text-black/75">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};
export default QRContainer;
