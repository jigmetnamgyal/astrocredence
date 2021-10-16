import { React, memo } from "react";
import teamStyle from "./teamProfile.module.scss";

const TeamProfile = ({ avatar, name, role }) => {
  return (
    <section className={teamStyle.memberCard}>
      <div>
        <div className={teamStyle.memberCardContent}>
          <img
            src={avatar}
            className={teamStyle.avatar}
            alt={`Picture of ${name}`}
          />
          <section className={teamStyle.memberInfo}>
            <h4 className={teamStyle.memberName}>{name}</h4>
            <h6 className={teamStyle.memberRole}>{role}</h6>
          </section>
        </div>
      </div>
    </section>
  );
};

export default memo(TeamProfile);
