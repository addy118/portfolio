import Platform from "./platform";

// https://alfa-leetcode-api.onrender.com/addy_118/solved
// https://geeks-for-geeks-api.vercel.app/addy118
export const PerformanceSection = async () => {
  let gfg = {
    name: "GFG",
    logo: "/gfg.jpeg",
    link: "https://www.geeksforgeeks.org/user/addy118/?ref=header_profile",
    username: "addy118",
    stats: {
      easy: 58,
      medium: 42,
      hard: 3,
      total: 103,
    },
  };

  let leetcode = {
    name: "Leetcode",
    logo: "/lc.png",
    link: "https://leetcode.com/u/addy_118",
    username: "addy_118",
    stats: {
      easy: 112,
      medium: 159,
      hard: 32,
      total: 303,
    },
  };

  // Fetch GFG data with error handling
  try {
    const gfgRes = await fetch(
      "https://geeks-for-geeks-api.vercel.app/addy118",
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // Add timeout
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!gfgRes.ok) {
      console.warn(`GFG API returned status: ${gfgRes.status}`);
    } else {
      const gfgData = await gfgRes.json();
      const stats = gfgData?.solvedStats;

      if (stats && gfgData?.info) {
        gfg = {
          name: "GFG",
          logo: "/gfg.jpeg",
          link: "https://www.geeksforgeeks.org/user/addy118/?ref=header_profile",
          username: gfgData?.info?.userName || "addy118",
          stats: {
            easy: (stats?.basic?.count || 0) + (stats?.easy?.count || 0),
            medium: stats?.medium?.count || 0,
            hard: stats?.hard?.count || 0,
            total: gfgData?.info?.totalProblemsSolved || 0,
          },
        };
      }
    }
  } catch (error) {
    console.error("Error fetching GFG data:", error);
    // gfg remains with default values
  }

  // Fetch LeetCode data with error handling
  try {
    const lcRes = await fetch(
      "https://alfa-leetcode-api.onrender.com/addy_118/solved",
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // Add timeout
        signal: AbortSignal.timeout(10000), // 10 second timeout
      }
    );

    if (!lcRes.ok) {
      console.warn(`LeetCode API returned status: ${lcRes.status}`);
    } else {
      const lcData = await lcRes.json();

      if (lcData) {
        leetcode = {
          name: "Leetcode",
          logo: "/lc.png",
          link: "https://leetcode.com/u/addy_118",
          username: "addy_118",
          stats: {
            easy: lcData?.easySolved || 0,
            medium: lcData?.mediumSolved || 0,
            hard: lcData?.hardSolved || 0,
            total: lcData?.solvedProblem || 0,
          },
        };
      }
    }
  } catch (error) {
    console.error("Error fetching LeetCode data:", error);
    // leetcode remains with default values
  }

  const codingNinjas = {
    name: "Coding Ninjas",
    logo: "/cn.jpeg",
    link: "https://www.naukri.com/code360/profile/devaddy",
    username: "addy_118",
    stats: {
      easy: 27,
      medium: 24,
      hard: 5,
      total: 56,
    },
  };

  const platforms = [gfg, leetcode, codingNinjas];

  return (
    <section
      id="performance"
      className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto relative font-mono z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-[#00A6ED]">
          My Performance on Coding Platforms
        </h2>
        <Platform platforms={platforms} />
      </div>
    </section>
  );
};
