import React from 'react';
import { githubProfile, featuredRepos } from '../data/githubData';
import { Github, Star, GitFork, BookOpen, ArrowUpRight, Flame } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  // Generate realistic contribution heatmap matrix (52 weeks x 7 days)
  const weeks = 40;
  const daysPerWeek = 7;

  // Predictable pattern simulation based on #365DaysOfCoding
  const getContributionLevel = (wIndex: number, dIndex: number) => {
    const seed = (wIndex * 7 + dIndex) % 13;
    if (seed === 0) return 0;
    if (seed < 4) return 1;
    if (seed < 9) return 2;
    if (seed < 12) return 3;
    return 4;
  };

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-neutral-300 border border-neutral-400/40';
      case 2:
        return 'bg-neutral-500 border border-neutral-600/50';
      case 3:
        return 'bg-neutral-700 border border-neutral-800';
      case 4:
        return 'bg-black border border-neutral-900 shadow-2xs';
      default:
        return 'bg-neutral-150 bg-neutral-100 border border-neutral-200';
    }
  };

  return (
    <section id="github" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            07 // OPEN SOURCE & REPOSITORIES
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="github-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Open Source & GitHub Ecosystem
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Public code repositories, algorithm implementations, educational study guides, and daily engineering commits.
            </p>
          </div>

          <a
            href={githubProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="github-profile-cta"
            className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs font-mono font-semibold rounded-xl transition-all inline-flex items-center gap-2 self-start md:self-auto shadow-sm"
          >
            <Github className="w-4 h-4 text-white" />
            <span>Explore @{githubProfile.username}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Developer Profile Summary Card */}
        <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-6 sm:p-8 mb-8 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
            {/* User Meta */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center font-mono font-extrabold text-lg shadow-sm">
                ZK
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-neutral-950">
                    {githubProfile.name}
                  </h3>
                  <span className="text-xs font-mono text-neutral-600">
                    @{githubProfile.username}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-0.5">
                  {githubProfile.bio}
                </p>
              </div>
            </div>

            {/* Top Languages Distribution */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                Primary Repository Languages:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {githubProfile.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5 text-xs font-mono text-neutral-700">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span>{lang.name}</span>
                    <span className="text-neutral-500">({lang.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-700">
              <span className="font-semibold flex items-center gap-1.5 text-neutral-900">
                <Flame className="w-4 h-4 text-black" />
                {githubProfile.totalContributionsLastYear} Contributions in the last year
              </span>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-neutral-100 border border-neutral-300" />
                <span className="w-2.5 h-2.5 rounded-xs bg-neutral-300 border border-neutral-400" />
                <span className="w-2.5 h-2.5 rounded-xs bg-neutral-500 border border-neutral-600" />
                <span className="w-2.5 h-2.5 rounded-xs bg-black border border-neutral-900" />
                <span>More</span>
              </div>
            </div>

            {/* Heatmap visualization */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5 min-w-[680px]">
                {Array.from({ length: weeks }).map((_, wIdx) =>
                  Array.from({ length: daysPerWeek }).map((_, dIdx) => {
                    const level = getContributionLevel(wIdx, dIdx);
                    return (
                      <div
                        key={`${wIdx}-${dIdx}`}
                        className={`w-3.5 h-3.5 rounded-xs ${getCellColor(level)} transition-all`}
                        title={`Week ${wIdx + 1}, Day ${dIdx + 1}: ${level > 0 ? `${level * 2} commits` : 'No contributions'}`}
                      />
                    );
                  })
                )}
              </div>
            </div>

            {/* Streak metrics */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-700 pt-3 border-t border-neutral-200">
              <span>Current Streak: <strong className="text-black">{githubProfile.currentStreakDays} days</strong></span>
              <span>•</span>
              <span>Longest Streak: <strong className="text-black">{githubProfile.longestStreakDays} days</strong></span>
              <span>•</span>
              <span>Public Repositories: <strong className="text-black">{githubProfile.totalRepos} repos</strong></span>
            </div>
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-black" />
          <span>Featured Repositories & Open Source Artifacts</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`github-repo-${repo.name.toLowerCase()}`}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-2xs hover:border-black hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-neutral-950 font-bold text-xs font-mono group-hover:text-black transition-colors">
                    <BookOpen className="w-3.5 h-3.5 text-neutral-700" />
                    <span className="line-clamp-1">{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-all shrink-0" />
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                  {repo.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {repo.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repo Stats Bar */}
              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-600">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          repo.language === 'Python'
                            ? '#3572A5'
                            : repo.language === 'TypeScript'
                            ? '#3178C6'
                            : '#555555'
                      }}
                    />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-800">
                    <Star className="w-3 h-3 text-neutral-700" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-800">
                    <GitFork className="w-3 h-3 text-neutral-700" />
                    {repo.forks}
                  </span>
                </div>
                <span className="text-[10px] text-neutral-400">{repo.updatedAt}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
