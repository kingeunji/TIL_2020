import React from "react";

// 프로필에서 사용 할 데이터
const profileData = {
  kingeunji : {
    name: '심은지',
    description:
      'Frontend Engineer'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화의 주인공'
  }
};

function Profile({match}) {

    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }

    return (
        <div>
          <h3>
            {username}({profile.name})
          </h3>
          <p>{profile.description}</p>
        </div>
    );
}

export default Profile;