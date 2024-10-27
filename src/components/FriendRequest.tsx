import Image from "next/image";
import Link from "next/link";

const FriendRequest = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4 ">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20268751/pexels-photo-20268751/free-photo-of-portrait-of-an-attractive-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="profile"
            width={20}
            height={20}
            className="cursor-point20"
          />
          <Image
            src="/reject.png"
            alt="profile"
            width={20}
            height={20}
            className="cursor-point20"
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20268751/pexels-photo-20268751/free-photo-of-portrait-of-an-attractive-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="profile"
            width={20}
            height={20}
            className="cursor-point20"
          />
          <Image
            src="/reject.png"
            alt="profile"
            width={20}
            height={20}
            className="cursor-point20"
          />
        </div>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/20268751/pexels-photo-20268751/free-photo-of-portrait-of-an-attractive-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="profile"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Wayne Burton</span>
        </div>

        <div className="flex gap-3 justify-end">
          <Image
            src="/accept.png"
            alt="profile"
            width={20}
            height={20}
            className="cursor-point20"
          />
          <Image
            src="/reject.png"
            alt="profile"
            width={20}
            height={20}
            className="cursor-point20"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
