import React, { useState } from 'react';
import { learningTreeData } from '../data/learningTree';
import { LearningNode } from '../types';
import { Network, BookOpen, Layers, CheckCircle, ChevronRight, ArrowRight } from 'lucide-react';

export const LearningHub: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<LearningNode>(
    learningTreeData.children ? learningTreeData.children[6] : learningTreeData // Default to Generative AI
  );

  const allMainNodes = learningTreeData.children || [];

  return (
    <section id="learning" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            06 // KNOWLEDGE & LITERATURE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="learning-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Research & Continuous Learning
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              An interactive knowledge map detailing current learning frontiers, academic literature, and architectural specializations.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-900 bg-neutral-100 border border-neutral-300 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
            <Network className="w-4 h-4 text-black" />
            <span>Interactive Node Explorer</span>
          </div>
        </div>

        {/* Tree & Detail Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Interactive Tree Navigation */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-2xl p-5 shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
                <span className="font-bold text-xs uppercase tracking-wider font-mono text-neutral-900">
                  {learningTreeData.title}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800 border border-neutral-300">
                Root Node
              </span>
            </div>

            {/* Tree Branch Nodes List */}
            <div className="space-y-1.5">
              {allMainNodes.map((node) => {
                const isSelected = selectedNode.id === node.id || (selectedNode.children && node.id === selectedNode.id);
                return (
                  <div key={node.id} className="space-y-1">
                    <button
                      type="button"
                      id={`tree-node-${node.id}`}
                      onClick={() => setSelectedNode(node)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-black text-white font-semibold shadow-xs'
                          : 'bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-neutral-400'}`} />
                        <span className="text-xs font-medium">{node.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-md ${
                          isSelected ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 text-neutral-600 border border-neutral-200'
                        }`}>
                          {node.status}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-neutral-400'}`} />
                      </div>
                    </button>

                    {/* Sub-branches if GenAI has children */}
                    {node.children && (
                      <div className="pl-4 space-y-1 pt-1">
                        {node.children.map((subNode) => {
                          const isSubSelected = selectedNode.id === subNode.id;
                          return (
                            <button
                              key={subNode.id}
                              type="button"
                              onClick={() => setSelectedNode(subNode)}
                              className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-xs transition-colors ${
                                isSubSelected
                                  ? 'bg-neutral-800 text-white font-semibold'
                                  : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200'
                              }`}
                            >
                              <span className="flex items-center gap-1.5">
                                <span className="text-neutral-400">└─</span>
                                <span>{subNode.title}</span>
                              </span>
                              <span className={`text-[9px] font-mono ${isSubSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                                {subNode.status}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Details Inspector */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 shadow-2xs">
            {/* Active Node Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-neutral-200">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                  Branch // {selectedNode.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 tracking-tight">
                  {selectedNode.title}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neutral-200 text-neutral-800 border border-neutral-300">
                {selectedNode.status}
              </span>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-6">
              {selectedNode.summary}
            </p>

            {/* Key Topics Explored */}
            <div className="mb-6">
              <h4 className="text-[11px] font-mono text-neutral-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5 text-black" />
                Key Concepts & Sub-Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedNode.topics.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-800 flex items-start gap-2 shadow-2xs"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Academic Papers & Literature */}
            <div className="mb-6">
              <h4 className="text-[11px] font-mono text-neutral-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                Foundational Literature & References
              </h4>
              <div className="space-y-2">
                {selectedNode.keyResources.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 text-xs font-mono text-neutral-800 flex items-center justify-between"
                  >
                    <span>{res}</span>
                    <span className="text-[10px] text-neutral-400 font-mono">Reference</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Portfolio Projects */}
            {selectedNode.relatedProjects && selectedNode.relatedProjects.length > 0 && (
              <div className="pt-4 border-t border-neutral-200">
                <h4 className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                  Applied in Selected Projects:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNode.relatedProjects.map((pName) => (
                    <a
                      key={pName}
                      href="#projects"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black text-white text-xs font-mono font-semibold hover:bg-neutral-800 transition-all shadow-xs"
                    >
                      <span>{pName}</span>
                      <ArrowRight className="w-3 h-3 text-neutral-300" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
