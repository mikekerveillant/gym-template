"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
ArrowRight,
CheckCircle,
Clock,
MapPin,
MessageCircle,
Star,
Trophy,
Users,
} from "lucide-react";

const plans = [
{
name: "Starter",
price: "₱1,999",
description: "Gym access during staffed hours.",
},
{
name: "Unlimited",
price: "₱2,999",
description: "Unlimited gym access and classes.",
},
{
name: "Elite",
price: "₱4,999",
description: "Unlimited access + personal coaching.",
},
];

const coaches = [
{
name: "Coach Mark",
role: "Strength & Conditioning",
},
{
name: "Coach Sarah",
role: "Weight Loss Specialist",
},
{
name: "Coach Miguel",
role: "Functional Fitness",
},
];

export default function Home() {
return ( <main className="min-h-screen bg-black text-white">
{/* HERO */} <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
  <div>
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
      <Trophy className="mr-2 h-4 w-4 text-blue-400" />
      #1 Fitness Community in Makati
    </div>

    <h1 className="mt-8 text-6xl font-black md:text-8xl">
      FORGE
      <br />
      FITNESS
    </h1>

    <p className="mt-6 text-2xl text-white/70">
      Train Strong. Move Better.
    </p>

    <p className="mt-6 max-w-xl text-lg text-white/60">
      Premium coaching, modern equipment, and a community that pushes
      you to become stronger every day.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
     <a href="#trial">
  <Button className="rounded-full bg-blue-500 hover:bg-blue-600">
    Book Free Trial
  </Button>
</a>

     <a href="#memberships">
  <Button
  variant="outline"
  className="rounded-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
>
  View Memberships
</Button>
</a>
    </div>
  </div>

  <div>
    <img
      src="/gym-hero.jpg"
      alt="Forge Fitness"
      className="rounded-[2rem] object-cover shadow-2xl"
    />
  </div>
</div>

  {/* STATS */}
  <section className="border-y border-white/10 py-10">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
      <div>
        <p className="text-4xl font-black">500+</p>
        <p className="text-white/50">Members</p>
      </div>

      <div>
        <p className="text-4xl font-black">20+</p>
        <p className="text-white/50">Classes Weekly</p>
      </div>

      <div>
        <p className="text-4xl font-black">4.9★</p>
        <p className="text-white/50">Google Rating</p>
      </div>

      <div>
        <p className="text-4xl font-black">8</p>
        <p className="text-white/50">Certified Coaches</p>
      </div>
    </div>
  </section>

  {/* MEMBERSHIPS */}
  <section id="memberships" className="mx-auto max-w-7xl px-5 py-24">
    <h2 className="text-center text-5xl font-black">
      Membership Plans
    </h2>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.name} className="border-white/10 bg-neutral-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-black">{plan.name}</h3>

            <p className="mt-4 text-5xl font-black text-blue-400">
              {plan.price}
            </p>

            <p className="mt-4 text-white/60">
              {plan.description}
            </p>

            <Button className="mt-8 w-full rounded-full">
              Join Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

{/* WEEKLY SCHEDULE */}
<section className="bg-neutral-950 py-24">
  <div className="mx-auto max-w-7xl px-5">
    <h2 className="text-center text-5xl font-black">
      Weekly Schedule
    </h2>

    <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10">
      <table className="w-full text-left">
        <thead className="bg-neutral-900">
          <tr>
            <th className="p-4">Time</th>
            <th className="p-4">Monday</th>
            <th className="p-4">Wednesday</th>
            <th className="p-4">Friday</th>
            <th className="p-4">Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-white/10">
            <td className="p-4">6:00 AM</td>
            <td className="p-4">Strength</td>
            <td className="p-4">HIIT</td>
            <td className="p-4">Strength</td>
            <td className="p-4">HYROX</td>
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4">7:00 PM</td>
            <td className="p-4">Boxing</td>
            <td className="p-4">Mobility</td>
            <td className="p-4">Boxing</td>
            <td className="p-4">Strength</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

  {/* COACHES */}
  <section className="bg-neutral-950 py-24">
    <div className="mx-auto max-w-7xl px-5">
      <h2 className="text-center text-5xl font-black">
        Meet The Coaches
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {coaches.map((coach, index) => (
          <Card key={coach.name} className="border-white/10 bg-black">
            <CardContent className="p-8 text-center">
              <img
  src={`/coach-${index + 1}.jpg`}
  alt={coach.name}
  className="mx-auto h-32 w-32 rounded-full object-cover"
/>

              <h3 className="mt-6 text-2xl font-black">
                {coach.name}
              </h3>

              <p className="text-white/50">
                {coach.role}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section id="trial" className="mx-auto max-w-7xl px-5 py-24">
    <div className="rounded-[2rem] bg-neutral-900 p-10">
      <h2 className="text-4xl font-black">
        Start Your Free Trial
      </h2>

      <p className="mt-4 text-white/60">
        Book a free gym tour and workout session.
      </p>

     <a
  href="https://wa.me/639177270072?text=Hi%20Forge%20Fitness%2C%20I'd%20like%20to%20book%20a%20free%20trial."
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-8 rounded-full bg-blue-500 hover:bg-blue-600">
    Book Free Trial
  </Button>
</a>
    </div>
  </section>

  <a
    href="https://wa.me/639177270072"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
</main>


);
}
