const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const container = canvas.parentElement;
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let mouse = { x: null, y: null };
window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

function scrollToMap() {
  document.getElementById('canvasSection').scrollIntoView({ behavior: 'smooth' });
}

// 1. Structural Layout Clusters System
const clusterHubs = {
  science: { title: "Science in Joy", x: 0, y: 0, targetX: 0.22, targetY: 0.25 },
  digital: { title: "Us in the Digital Era", x: 0, y: 0, targetX: 0.65, targetY: 0.55 }
};

// 2. Updated Project Catalog with WebP paths, Subpages, and the New Protein Video
const projects = [
  {
    id: "proteins",
    title: "What are Proteins?",
    shortTitle: "Proteins",
    cluster: ["science"],
    size: 70, 
    icon: "🧬",
    desc: "<p>Educational Motion Graphic</p><p>A short animation explaining the role of proteins in the human body from macro to micro. Using visual indicators and metaphors, the video aims to help audience of every age group understand.</p><p>July 2025 | Personal project</p>",
    mediaType: "motion",
    mediaUrl: "-5UPJtT0NTA", // Updated video link
    subPage: "motion.html",
    crossConnections: ["motor_skills", "ceratophys"]
  },
  {
    id: "motor_skills",
    title: "Infant Motor Skills",
    shortTitle: "Motor Skills",
    cluster: ["science"],
    size: 65, 
    icon: "👶",
    desc: "<p>Educational Motion Graphic</p><p>A short animation explaining the genetic and environmental components in infant development. This video also aims to warn about cross referencing on digital platforms.</p><p>June 2025 | Team Project</p>",
    mediaType: "motion",
    mediaUrl: "tT5FSb-E5t0",
    subPage: "motion.html",
    crossConnections: ["proteins", "ceratophys"]
  },
  {
    id: "intro",
    title: "Eva’s Self Introduction",
    shortTitle: "Self Intro",
    cluster: ["digital"], 
    size: 65, 
    icon: "🎨",
    desc: "<p>Motion Graphics</p><p>This is a fun self-introduction done by my kid’s drawing. Just some exploring, don’t take her too seriously~</p><p>February 2025 | Personal Project</p>",
    mediaType: "motion",
    mediaUrl: "6H74o9XKMkY",
    subPage: "motion.html",
    crossConnections: ["motor_skills", "proteins"]
  },
  {
    id: "stickman",
    title: "Wuxia Stickman",
    shortTitle: "Wuxia Stickman",
    cluster: ["digital"],
    size: 55, 
    icon: "⚔️",
    desc: "<p>2D Platformer game</p><p>The stickman must jump over obstacles to reach a martial arts book. Why must this game be so hard? Be sure to find out more~</p><p>February 2025| Personal Project</p>",
    mediaType: "image",
    mediaUrl: "Wuxia/e.webp",
    subPage: "games.html",
    crossConnections: ["mystery"]
  },
  {
    id: "mushroom",
    title: "Mushroom Infection",
    shortTitle: "Mushroom Infection",
    cluster: ["digital"],
    size: 85, 
    icon: "🍄",
    desc: "<p>Fiction film</p><p>A body horror film showing a visceral fungal outbreak that physically grows, spreads, and mutates across the characters’ body. If mushrooms represent the internet, how does the narrative change?</p><p>April 2025| Group Project</p>",
    mediaType: "film",
    mediaUrl: "S2hL7kBhhro",
    subPage: "films.html",
    crossConnections: ["211", "proteins", "mystery", "gambling"] 
  },
  {
    id: "mystery",
    title: "Grey",
    shortTitle: "Grey",
    cluster: ["digital"],
    size: 75, 
    icon: "🔍",
    desc: "<p>Interactive Storytelling Game</p><p>You wake up as a ghost only to discover your own body in the basment. Who could have done this to you, and why? As you travels back in time and collects clues, what dictions will you make?</p><p>April 2025| Group Project</p>",
    mediaType: "image",
    mediaUrl: "Grey/02.webp", // Configured WebP Image Asset
    subPage: "games.html",
    crossConnections: ["stickman"]
  },
  {
    id: "gambling",
    title: "Alex’s Choices",
    shortTitle: "Gambling",
    cluster: ["digital"],
    size: 60, 
    icon: "🎰",
    desc: "<p>PSA film</p><p>This is a game style video aiming to break down the process of how a student could slip into sports betting. it also aims to tackle the temptations in the digital world.</p><p>November 2023 | Group Project</p>",
    mediaType: "design",
    mediaUrl: "C1q_xeP9_N0",
    subPage: "designs.html",
    crossConnections: ["211", "mushroom"]
  },
  {
    id: "211",
    title: "211 - Investigation of Homelessness in Toronto",
    shortTitle: "211",
    cluster: ["digital"],
    size: 80, 
    icon: "🏢",
    desc: "<p>Documentary</p><p>A documentation of Toronto’s unhoused population. We gain a glimps into the overseen community to learn about their thoughts and the possible support out there.</p><p>November 2024 | Group Project</p>",
    mediaType: "film",
    mediaUrl: "zgMyfcOmEZs",
    subPage: "films.html",
    crossConnections: ["gambling", "mushroom"]
  },
  {
    id: "ceratophys",
    title: "Ceratophrys",
    shortTitle: "Ceratophys",
    cluster: ["science", "digital"], 
    size: 62,
    icon: "🦎",
    desc: "<p>Mixed medium</p><p>This is a collection beginning with a bone specimen. In what way will this piece be remembered? A porcelain plate, or a 3D model?</p><p>November 2025 | Personal Project</p>",
    mediaType: "image",
    mediaUrl: "Physical/C2.webp", // Configured WebP Image Asset
    subPage: "physical.html",
    crossConnections: ["being", "idea"]
  },
  {
    id: "being",
    title: "Working Beings",
    shortTitle: "Beings",
    cluster: ["digital"],
    size: 60, 
    icon: "🏺",
    desc: "<p>Blue and White Porcelain</p><p>This piece of work is an investigation into the impact of digital labour in traditional industries. Through uncomfortable combination of elements, hoping questions will be asked and answered.</p><p>May 2026 | personal Project</p>",
    mediaType: "image",
    mediaUrl: "Physical/B3.webp", // Configured WebP Image Asset
    subPage: "physical.html",
    crossConnections: ["ceratophys", "idea"]
  },
  {
    id: "idea",
    title: "I Have an Idea",
    shortTitle: "Idea",
    cluster: ["digital"],
    size: 58, 
    icon: "💡",
    desc: "<p>Ceramic Sculpture</p><p>This ceramic figurine is the representation of people on in the digital world. Opinions shared, but no emotions.</p><p>December 2025 | personal Project</p>",
    mediaType: "image",
    mediaUrl: "Physical/P1.webp", // Configured WebP Image Asset
    subPage: "physical.html",
    crossConnections: ["ceratophys", "being"]
  }
];

class Node {
  constructor(proj, index) {
    this.proj = proj;
    this.index = index;
    
    this.baseRadius = proj.size;
    this.radius = this.baseRadius;
    this.targetRadius = this.baseRadius;

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    
    this.orbitalAngle = (index * 1.5) + Math.random();
    this.orbitalDistance = 140 + (index * 4); 

    this.angleOffset = Math.random() * Math.PI * 2;
    this.driftSpeed = 0.0004 + Math.random() * 0.0003;
    this.driftRadius = 4 + Math.random() * 2;
  }

  update(time) {
    const W = canvas.width;
    const H = canvas.height;

    let targetX = W * 0.5;
    let targetY = H * 0.5;

    if (this.proj.cluster && this.proj.cluster.length > 0) {
      let sumX = 0, sumY = 0;
      this.proj.cluster.forEach(cKey => {
        let hub = clusterHubs[cKey];
        if (hub) {
          sumX += W * hub.targetX;
          sumY += H * hub.targetY;
        }
      });
      targetX = sumX / this.proj.cluster.length;
      targetY = sumY / this.proj.cluster.length;

      targetX += Math.cos(this.orbitalAngle) * this.orbitalDistance;
      targetY += Math.sin(this.orbitalAngle) * this.orbitalDistance;
    }

    let driftX = Math.cos(time * this.driftSpeed + this.angleOffset) * this.driftRadius;
    let driftY = Math.sin(time * this.driftSpeed + this.angleOffset) * this.driftRadius;

    // Soft Scaled-Down Gravity Friction
    this.x += (targetX + driftX - this.x) * 0.008;
    this.y += (targetY + driftY - this.y) * 0.008;

    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < this.radius + 4) {
      this.targetRadius = this.baseRadius * 1.15; 
    } else {
      this.targetRadius = this.baseRadius;
    }

    this.radius += (this.targetRadius - this.radius) * 0.15;
  }

  drawLines() {
    if (this.proj.cluster && this.proj.cluster.length > 0) {
      this.proj.cluster.forEach(cKey => {
        let hub = clusterHubs[cKey];
        if (hub) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(hub.x, hub.y);
          ctx.strokeStyle = 'rgba(142, 142, 147, 0.25)'; 
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      });
    }

    this.proj.crossConnections.forEach(connId => {
      let targetNode = nodeMap[connId];
      if (targetNode) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(targetNode.x, targetNode.y);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.lineWidth = 0.8;

        if (this.targetRadius > this.baseRadius || targetNode.targetRadius > targetNode.baseRadius) {
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.22)';
          ctx.lineWidth = 1.2;
        }
        ctx.stroke();
      }
    });
  }

  drawNode() {
    ctx.save();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = this.targetRadius > this.baseRadius ? 1.8 : 1;
    ctx.stroke();

    ctx.font = `${this.radius * 0.32}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.proj.icon, this.x, this.y - (this.radius * 0.24));

    ctx.fillStyle = this.targetRadius > this.baseRadius ? '#000000' : 'rgba(0, 0, 0, 0.7)';
    ctx.font = '400 12px "Inter", -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const words = this.proj.shortTitle.split(' ');
    const lines = [];
    let currentLine = words[0];
    const maxWidth = this.radius * 1.4;

    for (let i = 1; i < words.length; i++) {
      let testLine = currentLine + " " + words[i];
      let metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);

    const lineHeight = 15;
    const totalHeight = lines.length * lineHeight;
    let startY = this.y + (this.radius * 0.26) - (totalHeight / 2) + (lineHeight / 2);

    lines.forEach(line => {
      ctx.fillText(line, this.x, startY);
      startY += lineHeight;
    });

    ctx.restore();
  }
}

const nodeMap = {};
const nodeArray = projects.map((p, idx) => {
  let n = new Node(p, idx);
  nodeMap[p.id] = n;
  return n;
});

function resolveCollisions() {
  for (let i = 0; i < nodeArray.length; i++) {
    for (let j = i + 1; j < nodeArray.length; j++) {
      let nodeA = nodeArray[i];
      let nodeB = nodeArray[j];
      
      let dx = nodeB.x - nodeA.x;
      let dy = nodeB.y - nodeA.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let minDistance = nodeA.radius + nodeB.radius + 40; 
      
      if (distance < minDistance) {
        if (distance === 0) {
          nodeB.x += Math.random() - 0.5;
          nodeB.y += Math.random() - 0.5;
          continue;
        }
        let overlap = minDistance - distance;
        let pushX = (dx / distance) * overlap * 0.5;
        let pushY = (dy / distance) * overlap * 0.5;
        
        nodeA.x -= pushX;
        nodeA.y -= pushY;
        nodeB.x += pushX;
        nodeB.y += pushY;
      }
    }
  }
}

window.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  nodeArray.forEach(node => {
    let dx = clickX - node.x;
    let dy = clickY - node.y;
    let dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < node.radius) {
      openModal(node.proj);
    }
  });
});

function openModal(project) {
  const mediaSide = document.getElementById('modalMedia');
  const catSide = document.getElementById('modalCategory');
  const titleSide = document.getElementById('modalTitle');
  const descSide = document.getElementById('modalDescription');

  mediaSide.innerHTML = '';

  // Handle Video Embeds vs Image Rendering
  if (project.mediaType === "film" || project.mediaType === "motion" || project.mediaType === "design") {
    mediaSide.innerHTML = `<iframe src="https://www.youtube.com/embed/${project.mediaUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } else if (project.mediaType === "game") {
    // If it's a web link (like itch.io), use iframe, otherwise render placeholder image
    if (project.mediaUrl.startsWith('http')) {
      mediaSide.innerHTML = `<iframe src="${project.mediaUrl}" allowtransparency="true" allowfullscreen="true" scrolling="no"></iframe>`;
    } else {
      mediaSide.innerHTML = `<img src="${project.mediaUrl}" alt="${project.title}">`;
    }
  } else if (project.mediaType === "image") {
    mediaSide.innerHTML = `<img src="${project.mediaUrl}" alt="${project.title}">`;
  }

  catSide.innerText = project.cluster.length > 0 ? clusterHubs[project.cluster[0]].title.toUpperCase() : "INTERSECTION";
  titleSide.innerText = project.title; 
  
  // 3. Append dynamic direct link routing button below descriptive content blocks
  descSide.innerHTML = `
    ${project.desc}
    <div style="margin-top: 35px;">
      <a href="${project.subPage}" class="view-project-btn" style="
        display: inline-block;
        padding: 12px 28px;
        border: 1px solid #000000;
        background: #000000;
        color: #ffffff;
        font-family: 'Inter', -apple-system, sans-serif;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.2s ease;
      ">View Project Details</a>
    </div>
  `;

  document.getElementById('projectModal').classList.add('active');
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.getElementById('modalMedia').innerHTML = ''; 
}

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Hub text lives safely in background layer
  ctx.save();
  for (let key in clusterHubs) {
    let hub = clusterHubs[key];
    hub.x += ((canvas.width * hub.targetX) - hub.x) * 0.1;
    hub.y += ((canvas.height * hub.targetY) - hub.y) * 0.1;

    ctx.fillStyle = '#000000'; 
    ctx.font = '400 24px "Inter", -apple-system, sans-serif'; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    if (hub.title.length > 15) {
      let words = hub.title.split(' ');
      let mid = Math.ceil(words.length / 2);
      if (key === 'digital') mid = 2; 
      let line1 = words.slice(0, mid).join(' ');
      let line2 = words.slice(mid).join(' ');
      ctx.fillText(line1.toUpperCase(), hub.x, hub.y - 14);
      ctx.fillText(line2.toUpperCase(), hub.x, hub.y + 14);
    } else {
      ctx.fillText(hub.title.toUpperCase(), hub.x, hub.y);
    }
  }
  ctx.restore();

  nodeArray.forEach(node => node.update(timestamp));
  
  resolveCollisions();
  resolveCollisions(); 

  nodeArray.forEach(node => node.drawLines());
  nodeArray.forEach(node => node.drawNode());

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);