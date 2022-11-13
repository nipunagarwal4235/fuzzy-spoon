import React from "react";
import { BsGearFill } from "react-icons/bs";

const Services = () => {
  const services = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 5,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 6,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 7,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 8,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
    {
      id: 9,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod neque, id cumque illum quia fuga sequi cum sit! Sit explicabo, ullam dolore deserunt dolor sequi molestias corrupti tempora tenetur!",
    },
  ];

  return (
    <>
      <section class="text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Services Offering</h2>

            <p class="mt-4 text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
              fugit consequuntur saepe laborum.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              return (
                <a
                  class="block rounded-xl border border-black p-8 shadow-xl transition hover:border-blue hover:shadow-blue"
                  href="/services/digital-campaigns"
                >
                  <BsGearFill size={40} className="text-[]"></BsGearFill>

                  <h2 class="mt-4 text-xl font-bold text-white">
                    Digital campaigns
                  </h2>

                  <p class="mt-1 text-sm text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ut quo possimus adipisci distinctio alias voluptatum
                    blanditiis laudantium.
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
