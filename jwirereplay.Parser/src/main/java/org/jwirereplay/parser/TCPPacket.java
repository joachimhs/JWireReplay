package org.jwirereplay.parser;

import org.jwirereplay.parser.util.HeaderParseUtil;

public class TCPPacket extends IPPacket {

	private int src_port;
	private int dst_port;
	private boolean psh = false;
	private boolean urg = false;
	private boolean ack = false;
	private boolean rst = false;
	private boolean syn = false;
	private boolean fin = false;
	private long sequenceNumber = 0;
	private long ackNumber = 0;
	private int offset = 0;
	private int len;
	private int tcpHeaderLength;
    
	private byte[] data;
	
	public TCPPacket() {
		super();
	}
	
	public TCPPacket(byte[] packetHeaderArray, byte[] pcapPacketContents) {
		super(packetHeaderArray, pcapPacketContents);
		int tcpHeaderOffset = HeaderParseUtil.ethernetHeaderLength + super.getIPHeaderLength();
		this.src_port = HeaderParseUtil.convertPcapHeaderShort(pcapPacketContents, tcpHeaderOffset + 0);
		this.dst_port = HeaderParseUtil.convertPcapHeaderShort(pcapPacketContents, tcpHeaderOffset + 2);

		this.sequenceNumber |= (pcapPacketContents[tcpHeaderOffset + 4] & 0xff);
		this.sequenceNumber <<= 8;
		this.sequenceNumber |= (pcapPacketContents[tcpHeaderOffset + 5] & 0xff);
		this.sequenceNumber <<= 8;
		this.sequenceNumber |= (pcapPacketContents[tcpHeaderOffset + 6] & 0xff);
		this.sequenceNumber <<= 8;
		this.sequenceNumber |= (pcapPacketContents[tcpHeaderOffset + 7] & 0xff);

		this.ackNumber |= (pcapPacketContents[tcpHeaderOffset + 8] & 0xff);
		this.ackNumber <<= 8;
		this.ackNumber |= (pcapPacketContents[tcpHeaderOffset + 9] & 0xff);
		this.ackNumber <<= 8;
		this.ackNumber |= (pcapPacketContents[tcpHeaderOffset + 10] & 0xff);
		this.ackNumber <<= 8;
		this.ackNumber |= (pcapPacketContents[tcpHeaderOffset + 11] & 0xff);

		this.offset |= (pcapPacketContents[tcpHeaderOffset + 12] & 0xf0);
		this.offset >>= 2;

		// Flags
		this.urg = HeaderParseUtil.isByteSet(pcapPacketContents, tcpHeaderOffset + 13, 2);
		this.ack = HeaderParseUtil.isByteSet(pcapPacketContents, tcpHeaderOffset + 13, 3);
		this.psh = HeaderParseUtil.isByteSet(pcapPacketContents, tcpHeaderOffset + 13, 4);
		this.rst = HeaderParseUtil.isByteSet(pcapPacketContents, tcpHeaderOffset + 13, 5);
		this.syn = HeaderParseUtil.isByteSet(pcapPacketContents, tcpHeaderOffset + 13, 6);
		this.fin = HeaderParseUtil.isByteSet(pcapPacketContents, tcpHeaderOffset + 13, 7);

		
		this.tcpHeaderLength = ((pcapPacketContents[tcpHeaderOffset + 12] >> 4) & 0xF) * 4;
		
		int payloadDataStart = tcpHeaderOffset + tcpHeaderLength;
		byte[] data = new byte[pcapPacketContents.length - payloadDataStart];
		System.arraycopy(pcapPacketContents, payloadDataStart, data, 0, data.length);
		this.data = data;		
		
		this.len = this.tcpHeaderLength + this.data.length;
	}

	public int getSrc_port() {
		return src_port;
	}

	public void setSrc_port(int src_port) {
		this.src_port = src_port;
	}

	public int getDst_port() {
		return dst_port;
	}

	public void setDst_port(int dst_port) {
		this.dst_port = dst_port;
	}

	public boolean isPsh() {
		return psh;
	}

	public void setPsh(boolean psh) {
		this.psh = psh;
	}

	public boolean isUrg() {
		return urg;
	}

	public void setUrg(boolean urg) {
		this.urg = urg;
	}

	public boolean isAck() {
		return ack;
	}

	public void setAck(boolean ack) {
		this.ack = ack;
	}

	public boolean isRst() {
		return rst;
	}

	public void setRst(boolean rst) {
		this.rst = rst;
	}

	public boolean isSyn() {
		return syn;
	}

	public void setSyn(boolean syn) {
		this.syn = syn;
	}

	public boolean isFin() {
		return fin;
	}

	public void setFin(boolean fin) {
		this.fin = fin;
	}

	public long getSequenceNumber() {
		return sequenceNumber;
	}

	public void setSequenceNumber(long sequenceNumber) {
		this.sequenceNumber = sequenceNumber;
	}

	public long getAckNumber() {
		return ackNumber;
	}

	public void setAckNumber(long ackNumber) {
		this.ackNumber = ackNumber;
	}

	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	public int getLen() {
		return len;
	}

	public void setLen(int len) {
		this.len = len;
	}

	public int getTcpHeaderLength() {
		return tcpHeaderLength;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}
	
	
}
