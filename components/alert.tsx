import Container from "./container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            UniPro 早期エントリーが始まりました！ 詳しくは
            <a href="https://t.co/mFI1GFWRYm" className="blue">こちら</a>へ
          </>
        </div>
      </Container>
    </div>
  );
};

export default Alert;
