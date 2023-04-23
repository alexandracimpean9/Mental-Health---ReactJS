import React from "react";

const dataBlog = [
  {
    id: 1,
    title: "Emotional Theory of Rationality",
    img: require(`../Blog/images/blog1.png`),
    description:
      "In recent decades, the existence of a close relationship between emotional phenomena and rational processes has certainly been established, yet there is still no unified definition or effective model to describe them. To advance our understanding of the mechanisms governing the behavior of living beings, we must integrate multiple theories, experiments, and models from both fields. In this article we propose a new theoretical framework that allows integrating and understanding the emotion–cognition duality, from a functional point of view. Based on evolutionary principles, our reasoning adds to the definition and understanding of emotion, justifying its origin, explaining its mission and dynamics, and linking it to higher cognitive processes, mainly with attention, cognition, decision-making, and consciousness. According to our theory, emotions are the mechanism for brain function optimization, aside from the contingency and stimuli prioritization system. As a result of this approach, we have developed a dynamic systems-level model capable of providing plausible explanations for certain psychological and behavioral phenomena and establishing a new framework for the scientific definition of some fundamental psychological terms.",
    time: "1hour",
    link: "https://www.all-about-psychology.com/emotional-theory-of-rationality.html",
  },
  {
    id: 2,
    title: "Loneliness is contagious",
    img: require(`../Blog/images/blog2.jpg`),
    description:
      "Loneliness is a common condition affecting around one in three adults. It damages your brain, immune system, and can lead to depression and suicide. Loneliness can also increase your risk of dying prematurely as much as smoking can – and even more so than obesity. If you feel lonely, you tend to feel more stressed in situations that others cope better in, and even though you might get sufficient sleep, you don’t feel rested during the day",
    time: "2 weeks ago",
    link: "https://www.all-about-psychology.com/loneliness-is-contagious.html",
  },
  {
    id: 3,
    title: "Why Do Kids Lie And Is It Normal?",
    img: require(`../Blog/images/blog3.jpg`),
    description:
      "Children typically begin lying in the preschool years, between two and four years of age. These intentional attempts at deception may worry parents, who fear their child will become a pint-sized social deviant. But from a developmental perspective, lying in young children is rarely cause for concern. In fact, lying is often one of the first signs a young child has developed a “theory of mind”, which is the awareness others may have different desires, feelings, and beliefs to oneself. When a child misleadingly claims “Daddy said I could have an ice cream”, they’re using this awareness of others’ minds to plant false knowledge.",
    time: "3 weeks ago",
    link: "https://www.all-about-psychology.com/why-do-kids-lie-and-is-it-normal.html",
  },
  {
    id: 4,
    title: "Tricking The Brain",
    img: require(`../Blog/images/blog4.jpg`),
    description:
      "The magician snaps his fingers and a ball disappears right in front of your eyes. How is this possible, you ask yourself? You have a pretty good understanding of how objects behave and you know from experience that objects cannot simply disappear into thin air, yet this is exactly what you see. Magic is one of the oldest art forms and since written records began, magicians have baffled and amazed their audiences by creating illusions of the impossible. While most of their tricks remain precious secrets, scientists, myself among them, have started studying magic to gain insights into how and why our minds are so easily deceived. ",
    time: "1 months ago",
    link: "https://www.all-about-psychology.com/tricking-the-brain-how-magic-works.html",
  },
  {
    id: 5,
    title: "Getting Serious About Funny",
    img: require(`../Blog/images/blog5.jpg`),
    description:
      "Humor is observed in all cultures and at all ages. But only in recent decades has experimental psychology respected it as an essential, fundamental human behavior. Historically, psychologists framed humor negatively, suggesting it demonstrated superiority, vulgarity, Freudian id conflict or a defense mechanism to hide one’s true feelings. In this view, an individual used humor to demean or disparage others, or to inflate one’s own self-worth. As such, it was treated as an undesirable behavior to be avoided. And psychologists tended to ignore it as worthy of study.",
    time: "2 months ago",
    link: "https://www.all-about-psychology.com/psychologists-see-humor-as-a-character-strength.html",
  },
  {
    id: 6,
    title: "Anger Is Temporary Madness",
    img: require(`../Blog/images/blog6.png`),
    description:
      "People get angry for all sorts of reasons, from the trivial ones (someone cut me off on the highway) to the really serious ones (people keep dying in Syria and nobody is doing anything about it). But, mostly, anger arises for trivial reasons. That’s why the American Psychological Association has a section of its website devoted to anger management. Interestingly, it reads very much like one of the oldest treatises on the subject, On Anger, written by the Stoic philosopher Lucius Annaeus Seneca back in the first century CE.",
    time: "4 months ago",
    link: "https://www.all-about-psychology.com/anger-is-temporary-madness-the-stoics-knew-how-to-curb-it.html",
  },
  {
    id: 7,
    title: "The Science Of Superstition ",
    img: require(`../Blog/images/blog7.jpg`),
    description:
      "The number 13, black cats, breaking mirrors, or walking under ladders, may all be things you actively avoid – if you’re anything like the 25% of people in the US who consider themselves superstitious. Even if you don’t consider yourself a particularly superstitious person, you probably say “bless you” when someone sneezes, just in case the devil should decide to steal their soul – as our ancestors thought possible during a sneeze.",
    time: "7 months ago",
    link: "https://www.all-about-psychology.com/the-science-of-superstition.html",
  },
  {
    id: 8,
    title: "Your mind under stress",
    img: require(`../Blog/images/blog8.jpg`),
    description:
      "Some of the most important decisions you will make in your lifetime will occur while you feel stressed and anxious. From medical decisions to financial and professional ones, we are often required to weigh up information under stressful conditions. Take for example expectant parents who need to make a series of important choices during pregnancy and labour – when many feel stressed. Do we become better or worse at processing and using information under such circumstances?",
    time: "8 months ago",
    link: "https://www.all-about-psychology.com/how-your-mind-under-stress-gets-better-at-processing-bad-news.html",
  },
  {
    id: 9,
    title: "The Ability To Judge People",
    img: require(`../Blog/images/blog9.png`),
    description:
      "What are the factors related to the ability to judge accurately such behavioral characteristics as the abilities, traits, action tendencies, motives, and emotions of other people?",
    time: "5 months ago",
    link: "https://www.all-about-psychology.com/judge-of-character.html",
  },
  {
    id: 10,
    title: "Thinking is Difficult",
    img: require(`../Blog/images/blog10.png`),
    description:
      "I've always loved this quote and like many people believed it was from Carl Jung; but it turns out that he never actually said it. However, he did say Thinking is difficult, therefore let the herd pronounce judgment!, which may explain the misappropriation. ",
    time: "4 months ago",
    link: "https://www.all-about-psychology.com/thinking-is-difficult.html",
  },
  {
    id: 11,
    title: "Accepting Change",
    img: require(`../Blog/images/blog11.jpg`),
    description:
      "Change is good, according to the old adage, but we all know how difficult it can be to adjust to change or to inspire new behaviors and break habits. If change is good, then, why is it often so difficult to bring about?",
    time: "3 months ago",
    link: "https://www.all-about-psychology.com/accepting-change.html",
  },
  {
    id: 12,
    title: "Forced Compliance",
    img: require(`../Blog/images/blog12.jpg`),
    description:
      "Cognitive Consequences of Forced Compliance by Leon Festinger & James Carlsmith was the first of numerous studies to corroborate the theory of cognitive dissonance.",
    time: "2 months ago",
    link: "https://www.all-about-psychology.com/cognitive_dissonance.html",
  },
];

export default dataBlog;
