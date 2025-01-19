import style from "./HotelDescription.module.css";

export function HotelDescription({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div>
      <div className={`${style.content} flex flex-col`}>
        <div className={`${style.title}`}>About {name}</div>
        <div className={`${style.description} flex flex-col`}>
          {description}
        </div>
      </div>
    </div>
  );
}
