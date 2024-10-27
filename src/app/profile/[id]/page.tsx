import Image from "next/image";
import Feed from "../../../components/Feed";
import LeftMenu from "../../../components/LeftMenu";
import RightMenu from "../../../components/RightMenu";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6 ">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative ">
              <Image
                src="https://images.pexels.com/photos/368260/pexels-photo-368260.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/1510149/pexels-photo-1510149.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto object-cover -bottom-16 ring-4 ring-white  "
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Elva Weaver</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">5.7K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.1K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] ">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;