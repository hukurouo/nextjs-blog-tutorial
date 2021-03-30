import Link from "next/link";

export default function articles({
  allPostsData,
  tag,
}: {
  allPostsData: any;
  tag?: any;
}) {
  return (
    <ul className="">
      {allPostsData.map(({ id, date, title, tags}) => (
        <li className="mb-3" key={id}>
          <Link href={`/articles/${id}`}>
            <a className="text-lg font-semibold text-gray-700 ">{title}</a>
          </Link>
          <div className="flex mt-0.5">
            <div className="text-gray-600 text-base pt-tiny">{date} :</div>
            {tag ? (
              <></>
            ) : (
              <>
                <div>
                  {tags.map((tag: string) => {
                    return (
                      <Link href={`/tag/${tag}`} key={tag}>
                        <a className="text-xs bg-gray-100 text-gray-500 rounded ml-1.5 px-1 py-0.5">
                          {tag}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          <div className="text-gray-600 text-sm mt-3 mb-8">
            
          </div>
        </li>
      ))}
    </ul>
  );
}
